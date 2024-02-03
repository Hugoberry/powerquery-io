---
title: List.InsertRange
---

# List.InsertRange


## Description

Sarakstā tiek ievietotas vērtības atbilstoši norādītajam indeksam.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Tiek atgriezts jauns saraksts, kas ir izveidots, ievietojot saraksta <code>values</code> vērtības sarakstā <code>list</code> atbilstoši indeksam <code>index</code>. Pirmajai pozīcijai sarakstā atbilst indekss 0.      <ul>        <li><code>list</code>: mērķa saraksts, kurā ir jāievieto vērtības.</li>        <li><code>index</code>: mērķa saraksta (<code>list</code>) indekss, atbilstoši kuram ir jāievieto vērtības. Pirmajai pozīcijai sarakstā atbilst indekss 0.</li>        <li><code>values</code>: sarakstā <code>list</code> ievietojamo vērtību saraksts.</li>      </ul>


## Examples

### Example #1 
Ievietojiet sarakstu (\{3, 4}) mērķa sarakstā (\{1, 2, 5}) atbilstoši indeksam 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
Ievietojiet sarakstu ar ligzdotu sarakstu (\{1, \{1.1, 1.2}}) mērķa sarakstā (\{2, 3, 4}) atbilstoši indeksam 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
