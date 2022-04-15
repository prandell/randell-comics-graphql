# Notes

This document was used to capture things I learnt while creating this project

## SCSS

- Allows you to target classes that are direct childern of other classes by nesting the CSS definitions:

```
.categories-container {
  background-color: red;
  padding: 10px;
  .category-container {
    background-color: green;
    padding: 20px;
    .category-body-container {
      background-color: blue;
      padding: 30px;
    }
  }
}
```
