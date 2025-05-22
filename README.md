<h1><b>Store Application for managing products</b></h1>

<p>This full-stack application, built with Spring Boot (backend), Angular (frontend), and MySQL database, provides complete CRUD functionality for product management. 
  It allows users to Create, Read, Update, and Delete products through an intuitive interface with robust API support.</p>

<p>To run the application, both components must be launched: start the Spring Boot backend server first, then launch the Angular frontend. 
  The backend provides the REST API on port 8080 (default), while the frontend runs on port 4200 and connects to these API endpoints.</p>

<p>On startup, the application automatically loads at http://localhost:4200/products, displaying all database products in a list view. 
  Each product entry shows an image, name, price, and action buttons (Details, Edit, Delete). Additional product information is available in the detail view but hidden from the list for clarity.</p>

![Image](https://github.com/user-attachments/assets/8b66e02e-b5e8-49f1-9b21-dec2afc7c692)

![Image](https://github.com/user-attachments/assets/3ab07c45-4c03-4e37-b1b2-c6b3e9723411)

![Image](https://github.com/user-attachments/assets/028c16ee-7127-4abe-9f57-2fa43de5b1d7)

<p>Clicking the 'Add Product' button redirects to http://localhost:4200/create-product, displaying a product creation form. The form requires: name, price, quantity, and image. 
  If any mandatory field is missing, validation warnings appear below each required field with corresponding error messages.</p>

![Image](https://github.com/user-attachments/assets/d1a14bee-0a21-4385-a212-210ca4aacd9e)

![Image](https://github.com/user-attachments/assets/97648176-2df7-49c3-b25e-a20498187979)

<p>Upon entering valid data in all fields, the Create button becomes enabled. Clicking it submits the form, creates the new product in the database, and automatically displays it in the products list while redirecting back to the main view.</p>

![Image](https://github.com/user-attachments/assets/975b4c5d-9686-4f8e-a3fd-571e935cde40)

![Image](https://github.com/user-attachments/assets/3c3bebc0-8b68-438b-8730-f48a29a1370e)

<p>Each product features a Details button that redirects to a dynamic URL (e.g., http://localhost:4200/product-details/1, where '1' represents the product ID). This view displays additional information including category and description. Optional fields show placeholder text when empty: 'No description provided' and 'No category specified'.</p>

![Image](https://github.com/user-attachments/assets/33ae35d7-5844-4dc9-b03b-36a3646f796e)

![Image](https://github.com/user-attachments/assets/a5feb0fa-616e-40f6-aada-483023f8e16f)

<p>Each product includes an Edit button for modifying its details. Clicking it navigates to a dynamic URL (e.g., http://localhost:4200/product-update/2), displaying a pre-populated form with the product's current data. The same validation rules apply as during creation—invalid or empty values for mandatory fields (name, price, quantity) trigger error messages. Successful edits (e.g., updating a price from 28 to 25.90) instantly reflect in both the product list and database.</p>

![Image](https://github.com/user-attachments/assets/60f7bd8f-bc4f-4194-94f8-be3e833addc7)

![Image](https://github.com/user-attachments/assets/dba8d79f-c332-469d-aa7c-36ef6fc4b422)
