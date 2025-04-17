### 1. Insert multiple documents into a "wizards" collection

db.wizards.insertMany([
{ name: "Gandalf", age: 2019, element: "light", staff: true },
{ name: "Saruman", age: 2020, element: "fire", staff: true },
{ name: "Radagast", age: 2005, element: "nature", staff: false },
{ name: "Alatar", age: 1500, element: "air", staff: false },
{ name: "Pallando", age: 1500, element: "water", staff: true },
]);

### 2. Find all documents

db.wizards.find();

### 3. Find documents with a specific element

db.wizards.find({ element: "fire" });

### 4. Find documents with projection (select name and element only)

db.wizards.find({}, { name: 1, element: 1, \_id: 0 });

### 5. Sort by age descending (oldest first)

db.wizards.find().sort({ age: -1 });

### 6. Sort by name alphabetically

db.wizards.find().sort({ name: 1 });

### 7. Limit results to 3 documents

db.wizards.find().limit(3);

### 8. Skip the first 2 documents

db.wizards.find().skip(2);

### 9. Combined: sort, skip and limit

db.wizards.find().sort({ name: 1 }).skip(1).limit(2);

### 10. Find wizards who have a staff

db.wizards.find({ staff: true });

### 11. Find wizards older than 2000 years

db.wizards.find({ age: { $gt: 2000 } });

### 12. Find wizards with age between 1500 and 2000

db.wizards.find({ age: { $gte: 1500, $lte: 2000 } });

### 13. Update a single document

db.wizards.updateOne({ name: "Radagast" }, { $set: { staff: true } });

### 14. Update many documents (increase age by 100 where age >= 1500)

db.wizards.updateMany({ age: { $gte: 1500 } }, { $inc: { age: 100 } });

### 15. Delete one document by name

db.wizards.deleteOne({ name: "Saruman" });

### 16. Count all documents

db.wizards.countDocuments();

### 17. Use regex to find names starting with "G"

db.wizards.find({ name: { $regex: /^G/, $options: "i" } });

### 18. Find documents where name exists and is not null

db.wizards.find({ name: { $exists: true, $ne: null } });

### 19. Aggregation: Group by element and calculate average age

db.wizards.aggregate([
{ $group: { _id: "$element", avgAge: { $avg: "$age" } } },
]);

### 20. Use $expr to compare fields (hypothetical field comparison)

db.wizards.find({ $expr: { $gt: ["$age", 1800] } });
