---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Επιστρέφει έναν τύπο που αντιπροσωπεύει συναρτήσεις με συγκεκριμένους περιορισμούς παραμέτρων και τύπων επιστροφής.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Δημιουργεί ένα στοιχείο <code>function type</code> από το <code>signature</code>, μια εγγραφή του <code>ReturnType</code> και του <code>Parameters</code> και το <code>min</code>, τον ελάχιστο αριθμό ορισμάτων που απαιτούνται για την κλήση της συνάρτησης.


## Examples

### Example #1 
Δημιουργεί τον τύπο για μια συνάρτηση που λαμβάνει μια παράμετρο αριθμού με όνομα X και επιστρέφει έναν αριθμό.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
