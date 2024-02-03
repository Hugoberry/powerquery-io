---
title: List.Mode
---

# List.Mode


## Description

Tiek atgriezta sarakstā visbiežāk lietotā vērtība.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Atgriež sarakstā <code>list</code> visbiežāk lietoto vienumu. Ja saraksts ir tukšs, tiek aktivizēts izņēmums. Ja vairākiem vienumiem ir vienāds maksimālais biežums, tiek izvēlēts pēdējais vienums.    Varat norādīt papildu <code>comparisonCriteria</code> vērtību <code>equationCriteria</code>, lai kontrolētu vienādības pārbaudi. 


## Examples

### Example #1 
Iegūstiet sarakstā &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; visbiežāk lietoto vienumu.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Iegūstiet sarakstā &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; visbiežāk lietoto vienumu.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
