---
title: List.Numbers
---

# List.Numbers


## Description

Tiek atgriezts skaitļu saraksts atbilstoši norādītajai sākotnējai vērtībai, vērtību skaitam un papildu palielinājuma vērtībai.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Tiek atgriezts skaitļu saraksts atbilstoši norādītajai sākotnējai vērtībai, vērtību skaitam un papildu palielinājuma vērtībai. Noklusējuma palielinājuma vērtība ir 1.<ul>   <li><code>start</code>: saraksta sākotnējā vērtība.</li>   <li><code>count</code>: izveidojamo vērtību skaits.</li>   <li><code>increment</code>: <i>(papildu)</i> palielinājuma vērtība. Ja šī vērtība nav norādīta, saraksta vērtības tiek palielinātas par 1.</li></ul>


## Examples

### Example #1 
Ģenerējiet 10 secīgu skaitļu sarakstu, kura pirmā vērtība ir 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Ģenerējiet 10 skaitļu sarakstu, kura pirmā vērtība ir 1 un katrs nākamais skaitlis ir palielināts par 2.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
