---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Returnează o funcţie ce divizează textul într-o listă de text conform decalajelor şi lungimilor specificate.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Returnează o funcție care divizează textul într-o listă de text conform decalajelor și lungimilor specificate. O lungime nulă indică faptul că toate intrările rămase trebuie incluse.


## Examples

### Example #1 
Divizează intrarea după poziția specificată și perechile de lungime, începând de la începutul intrării. Rețineți că intervalele din acest exemplu se suprapun.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Divizează intrarea după poziția specificată și perechile de lungime, începând de la sfârșitul intrării.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Împărțiți intrarea într-un cod poștal de lungime fixă, urmat de un nume de oraș de lungime variabilă.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
