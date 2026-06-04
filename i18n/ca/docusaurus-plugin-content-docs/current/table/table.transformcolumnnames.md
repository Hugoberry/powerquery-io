---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Utilitza la funció especificada per transformar els noms de columna.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transforma els noms de columna mitjançant la funció `nameGenerator` proporcionada. Les opcions vàlides són les següents:

`MaxLength` especifica la longitud màxima dels noms nous de les columnes. Si la funció proporcionada obté com a resultat un nom de columna més llarg, el nom llarg es retallarà.

`Comparer` s'utilitza per controlar la comparació mentre es generen noms de columna nous. Es poden utilitzar comparadors per fer comparacions sense distinció de majúscules i minúscules o amb detecció de la cultura i la configuració regional.

Els següents comparadors integrats estan disponibles en el llenguatge de fórmules:

-   `Comparer.Ordinal`: s'utilitza per fer una comparació ordinal exacta.
-   `Comparer.OrdinalIgnoreCase`: s'utilitza per fer una comparació ordinal exacta sense distinció de majúscules i minúscules.
-   `Comparer.FromCulture`: s'utilitza per fer una comparació amb detecció de cultura


## Examples

### Example #1
Suprimeix el caràcter `#(tab)` dels noms de columna
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Transforma els noms de les columnes per generar noms de 6 caràcters que no diferenciïn entre majúscules i minúscules.
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
