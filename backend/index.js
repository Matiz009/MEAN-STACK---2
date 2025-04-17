const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./model/post"); // Import the Post model

app.use(express.json()); //middleware
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/posts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//home route
app.get("/", (req, res) => {
  const htmlString = `
<html lang="en">
<body>
<h1>Hello, this is a sample HTML page!</h1>
<h2>Welcome to Backend</h2>
</body>
</html>
`;
  // Send the HTML string as the response res.send(htmlString);
  res.send(htmlString);
  res.send("Hello World!");
});

// posts endpoint
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from the database
    res.json(posts); // Send the posts as JSON response
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// posts endpoint with id

app.get("/api/posts/:id", async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId); // Fetch post by ID from the database
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  } else {
    res.json(post); // Send the post as JSON response
  }
});

// endpoint to delete a post

app.delete("/api/posts/:id", async (req, res) => {
  const postId = req.params.id;
  console.log(req.params);
  try {
    await Post.findByIdAndDelete(postId); // Delete post by ID from the database
    res.json({
      message: `Post ${postId} deleted`,
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// endpoint to create a post

app.post("/api/create-post", async (req, res) => {
  const post = req.body;
  console.log(req.body);
  try {
    const newPost = await Post.create(post); // Create a new post in the database
    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// endpoint to update a post

app.put("/api/update-post/:id", async (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;
  console.log(req.params);
  try {
    const newPost = await Post.findByIdAndUpdate(postId, updatedPost, {
      new: true,
    }); // Update post by ID in the database
    if (!newPost) {
      return res.status(404).json({ error: "Post not found" });
    } else {
      res.json({
        message: `Post ${postId} updated`,
        post: newPost,
      });
    }
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
