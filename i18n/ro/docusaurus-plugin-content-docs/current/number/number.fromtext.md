---
title: Number.FromText
---

# Number.FromText


Creează numere din formatele text obişnuite ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Returnează o valoare `number` din valoarea text dată, `text`.

-   `text`: reprezentarea textuală a unei valori numerice. Reprezentarea trebuie să fie într-un format numeric obișnuit cum ar fi „15”, „3.423,10” sau „5,0E-10”.
-   `culture`: O valoare cultură opțională care controlează modul în care este interpretat `text` (de exemplu „ro-RO”).


## Examples

### Example #1
Obţineţi valoarea number pentru `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Obţineţi valoarea numerică pentru `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
