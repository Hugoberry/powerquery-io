---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformă numele de coloane utilizând funcția dată.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transformă numele coloanelor utilizând funcția `nameGenerator` dată. Opțiuni valide:

`MaxLength` specifică lungimea maximă a numelor de coloane noi. Dacă funcția specificată generează un nume de coloană mai lung, numele lung va fi trunchiat.

`Comparer` este utilizată pentru a controla comparația în timp ce se generează nume noi de coloane. Funcțiile de comparare pot fi utilizate pentru a furniza comparații care nu țin cont de diferența între literele mari sau mici ori care țin cont de cultură și de setările regionale.

Următoarele funcții de comparare predefinite sunt disponibile în limbajul pentru formule:

-   `Comparer.Ordinal`: Utilizată pentru a efectua o comparație ordinală exactă
-   `Comparer.OrdinalIgnoreCase`: Utilizată pentru a efectua o comparație ordinală exactă, care nu este sensibilă la litere mari și mici
-   `Comparer.FromCulture`: Utilizată pentru a efectua o comparație care ține cont de cultură


## Examples

### Example #1
Eliminați caracterul `#(tab)` din numele de coloană
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Transformă numele coloanelor pentru a genera nume care nu țin cont de litere mari sau mici, de lungime 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
