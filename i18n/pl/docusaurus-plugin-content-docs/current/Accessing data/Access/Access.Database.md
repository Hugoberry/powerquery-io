---
title: Access.Database
---

# Access.Database


## Description

Zwraca strukturalną reprezentację bazy danych programu Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Zwraca reprezentację strukturalną bazy danych programu Access: <code>database</code>. Opcjonalny parametr rekordu (<code>options</code>) pozwala określić następujące opcje:    <ul><li><code>CreateNavigationProperties</code> : Wartość logiczna (true/false) określająca, czy na podstawie zwr&#243;conych wartości mają być generowane właściwości nawigacji (wartość domyślna to false).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcja, kt&#243;ra jest używana do tworzenia nazw właściwości nawigacji.</li></ul>    Parametr rekordu można podać na przykład w formacie [opcja1 = wartość1, opcja2 = wartość2...].



## Category
Accessing data
