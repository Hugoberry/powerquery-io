---
title: Access.Database
---

# Access.Database


Returns a structural representation of an Access database.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Returns a structural representation of an Access database, `database`. An optional record parameter, `options`, may be specified to control the following options:

-   `CreateNavigationProperties` : A logical (true/false) that sets whether to generate navigation properties on the returned values (default is false).
-   `NavigationPropertyNameGenerator` : A function that is used for the creation of names for navigation properties.

The record parameter is specified as \[option1 = value1, option2 = value2...\], for example.



## Category
Accessing data
