---
title: Access.Database
---

# Access.Database


Zwraca strukturalną reprezentację bazy danych programu Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Zwraca reprezentację strukturalną bazy danych programu Access: `database`. Opcjonalny parametr rekordu `options` pozwala określić następujące opcje:

-   `CreateNavigationProperties` : Wartość logiczna (true/false) określająca, czy na podstawie zwróconych wartości mają być generowane właściwości nawigacji (wartość domyślna to false).
-   `NavigationPropertyNameGenerator` : Funkcja, która jest używana do tworzenia nazw właściwości nawigacji.

Parametr rekordu można podać na przykład w formacie \[opcja1 = wartość1, opcja2 = wartość2...\].



## Category
Accessing data
