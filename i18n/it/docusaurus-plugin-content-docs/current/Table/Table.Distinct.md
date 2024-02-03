---
title: Table.Distinct
---

# Table.Distinct


## Description

Rimuove le righe duplicate dalla tabella.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Rimuove le righe duplicate dalla tabella.    Un parametro facoltativo, <code>equationCriteria</code>, specifica quali colonne della tabella vengono testate per la duplicazione. Se non si specifica <code>equationCriteria</code>, verranno testate tutte le colonne.<br />    <br />    Poiché Power Query talvolta esegue l'offload di determinate operazioni nelle origini dati back-end (note come "riduzione") e a volte ottimizza le query in base a     ignorando le operazioni che non sono necessariamente necessarie, in generale non è garantito quale duplicato specifico verrà mantenuto.    Ad esempio, non è possibile presumere che la prima riga con un set univoco di valori di colonna rimanga e che le righe più in basso nella tabella vengano rimosse.    Se si desidera che la rimozione dei duplicati si comporti in modo prevedibile, inserire la tabella nel buffer utilizzando <code>Table.Buffer</code>.


## Examples

### Example #1 
Rimuovere le righe duplicate dalla tabella.
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
Rimuovere le righe duplicate dalla colonna [b] nella tabella &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
