---
title: Value.FromText
---

# Value.FromText


## Description

Erstellt einen stark typisierten Wert auf der Grundlage einer Textdarstellung.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Decodiert einen Wert aus einer Textdarstellung (<code>text</code>) und interpretiert ihn als Wert mit einem geeigneten Typ.    <code>Value.FromText</code> akzeptiert einen Textwert und gibt eine Zahl, einen logischen Wert, einen NULL-Wert, einen datetime-Wert, einen duration-Wert oder einen Textwert zurück. Der leere Textwert wird als NULL-Wert interpretiert.    Optional kann auch ein Element vom Typ "<code>culture</code>" angegeben werden (Beispiel: "de-DE").



## Category
Text.Conversions from and to text
