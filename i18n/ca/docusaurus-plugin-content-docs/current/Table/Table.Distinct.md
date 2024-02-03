---
title: Table.Distinct
---

# Table.Distinct


## Description

Suprimeix les files duplicades de la taula.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Suprimeix les files duplicades de la taula.    Un paràmetre opcional, <code>equationCriteria</code>, especifica quines columnes de la taula es proven per a la duplicació. Si no s'especifica el <code>equationCriteria</code>, es proven totes les columnes.<br />    <br />    Com que el Power Query de vegades baixa determinades operacions a orígens de dades de fons (coneguts com a "plegaments"), i de vegades optimitza les consultes per     s'ometran les operacions que no són estrictament necessàries, en general no hi ha cap garantia que es preservi un duplicat específic.    Per exemple, no podeu assumir que la primera fila amb un conjunt únic de valors de columna romandrà i se suprimiran les files més avall de la taula.    Si voleu que la supressió duplicada es comporti de manera predictible, primer emmagatzema la taula a la memòria intermèdia <code>Table.Buffer</code>.


## Examples

### Example #1 
Suprimeix les files duplicades de la taula.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
Suprimeix les files duplicades de la columna [b] de la taula &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
