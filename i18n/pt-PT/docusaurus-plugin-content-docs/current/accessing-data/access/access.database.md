---
title: Access.Database
---

# Access.Database


Devolve uma representação estrutural de uma base de dados do Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Devolve uma representação estrutural de uma base de dados Access, `database`. Pode ser especificado um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se são geradas as propriedades de navegação nos valores devolvidos (a predefinição é false).
-   `NavigationPropertyNameGenerator` : Uma função que é utilizada para a criação de nomes de propriedades de navegação.

O parâmetro de registo é especificado como \[option1 = value1, option2 = value2...\], por exemplo.



## Category
Accessing data
