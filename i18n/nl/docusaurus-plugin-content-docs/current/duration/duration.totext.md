---
title: Duration.ToText
---

# Duration.ToText


Retourneert de tekst van de vorm "d.u:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Hiermee wordt een tekstweergave geretourneerd in de vorm "dag.uur:min:sec" van de opgegeven duurwaarde `duration`.

-   `duration`: een `duur` op basis waarvan de tekstweergave wordt berekend.
-   `format`: *\[Optioneel\]* Afgeschaft, genereert een fout als deze niet null is.


## Examples

### Example #1
`#duration(2, 5, 55, 20)` omzetten naar een tekstwaarde.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
