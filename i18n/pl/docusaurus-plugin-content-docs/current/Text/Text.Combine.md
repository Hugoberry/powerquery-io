---
title: Text.Combine
---

# Text.Combine


## Description

Łączy listę wartości tekstowych w jedną wartość tekstową.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Zwraca wynik połączenia listy wartości tekstowych<code>texts</code> w pojedynczą wartość tekstową. Wszystkie wartości <code>null</code> obecne w <code>texts</code> są ignorowane.    Można określić opcjonalny <code>separator</code> element używany w końcowym połączonym tekście.


## Examples

### Example #1 
Połącz wartości tekstowe „Seattle” i „WA”.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Połącz wartości tekstowe „Seattle” i „WA”, rozdzielając je przecinkiem i spacją.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Połącz wartości „Seattle”, &lt;code&gt;null&lt;/code&gt; i „WA”, rozdzielając je przecinkami i spacją. (Zwróć uwagę, że &lt;code&gt;null&lt;/code&gt; jest ignorowany).
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
