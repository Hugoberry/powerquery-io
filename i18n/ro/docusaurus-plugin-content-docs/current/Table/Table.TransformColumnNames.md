---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transformă numele de coloane utilizând funcția dată.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Transformă numele coloanelor utilizând funcția <code>nameGenerator</code> dată. Opțiuni valide:    <div>      <code>MaxLength</code> specifică lungimea maximă a numelor de coloane noi. Dacă funcția specificată generează un nume de coloană mai lung, numele lung va fi trunchiat.    </div>    <div>      <code>Comparer</code> este utilizată pentru a controla comparația în timp ce se generează nume noi de coloane. Funcțiile de comparare pot fi utilizate pentru a furniza comparații care nu țin cont de diferența între literele mari sau mici ori care țin cont de cultură și de setările regionale.    </div>    <div>      Următoarele funcții de comparare predefinite sunt disponibile în limbajul pentru formule:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Utilizată pentru a efectua o comparație ordinală exactă</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Utilizată pentru a efectua o comparație ordinală exactă, care nu este sensibilă la litere mari și mici</li>      <li> <code>Comparer.FromCulture</code>: Utilizată pentru a efectua o comparație care ține cont de cultură</li>    </ul>    


## Examples

### Example #1 
Eliminați caracterul &lt;code&gt;#(tab)&lt;/code&gt; din numele de coloană
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
