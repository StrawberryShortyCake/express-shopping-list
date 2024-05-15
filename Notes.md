1) Build an app
    - array disguised as DB tables

2) Create a model.js
    - classes for shopping items (name, price)

3) in app.js, routes, test, need to import items array from models

4) create app.js
    - GET/items -- take query string, query DB, return results and render HTML
    - POST/items
    - GET/items/:name: -- parse request
    - PATCH/items/:name: -- parse request JSON body
    - DELETE/items/:namae: - simply interact with DB (models.js)