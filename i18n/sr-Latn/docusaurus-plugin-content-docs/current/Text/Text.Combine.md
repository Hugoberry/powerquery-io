---
title: Text.Combine
---

# Text.Combine


## Description

Povezuje listu tekstualnih vrednosti u jednu tekstualnu vrednost.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Vraća rezultat kombinovanja liste tekstualnih vrednosti, <code>texts</code>, u jednu tekstualnu vrednost. Sve <code>nulte</code> vrednosti prisutne u <code>texts</code> se zanemaruju.    Može da se navede opcionalna <code>separator</code> koja se koristi u konačnom kombinovanom tekstu.


## Examples

### Example #1 
Kombinovanje tekstualnih vrednosti „Seattle“ i „WA“.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Kombinujte tekstualne vrednosti „Sijetl“ i &#34;WA&#34;, razdvojene zarezom i razmakom.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Kombinujte vrednosti „Sijetl“, &lt;code&gt;nultu vrednost&lt;/code&gt; i „WA“, razdvojene zarezom i razmakom. (Imajte u vidu da se &lt;code&gt;nulta vrednost&lt;/code&gt; zanemaruje.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
