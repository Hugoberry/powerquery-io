---
title: List.Modes
---

# List.Modes


## Description

Tiek atgriezts saraksts, kurā ir ietvertas sarakstā visbiežāk lietotās vērtības.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Atgriež sarakstā <code>list</code> visbiežāk lietoto vienumu. Ja saraksts ir tukšs, tiek aktivizēts izņēmums. Ja vairākiem vienumiem ir vienāds maksimālais biežums, tiek izvēlēts pēdējais vienums.    Varat norādīt papildu <code>comparisonCriteria</code> vērtību <code>equationCriteria</code>, lai kontrolētu vienādības pārbaudi. 


## Examples

### Example #1 
Iegūstiet sarakstā &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; visbiežāk lietotos vienumus.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
