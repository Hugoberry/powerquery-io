---
title: Access.Database
---

# Access.Database


Retorna uma representação estrutural de um banco de dados do Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Retorna uma representação estrutural de um banco de dados do Access, `database`. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se as propriedades de navegação nos valores retornados serão geradas (o padrão é false).
-   `NavigationPropertyNameGenerator` : Uma função usada para a criação de nomes de propriedades de navegação.

O parâmetro de registro é especificado como \[option1 = value1, option2 = value2...\], por exemplo.



## Category
Accessing data
