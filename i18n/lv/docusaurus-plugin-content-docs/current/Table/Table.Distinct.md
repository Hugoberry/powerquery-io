---
title: Table.Distinct
---

# Table.Distinct


## Description

No tabulas tiek noņemti rindu dublikāti.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Noņem rindu dublikātus no tabulas.    Neobligāts parametrs <code>equationCriteria</code>, kas norāda, kuras tabulas kolonnas tiek pārbaudītas, lai noteiktu dublikātus. Ja <code>equationCriteria</code> nav norādīts, tiek pārbaudītas visas kolonnas.<br />    <br />    Tā kā Power Query dažkārt pārlādē noteiktas operācijas aizmugursistēmas datu avotiem (pazīstamas kā “locīšana”), un dažkārt arī optimizē vaicājumus,     tādu darbību izlaišana, kas nav obligāti nepieciešamas, vispār nav garantijas, kas konkrēti dublikāti tiks saglabāti.    Piemēram, nevar pieņemt, ka pirmā rinda ar unikālu kolonnu vērtību kopu paliks, bet rindas tālāk tabulā tiks noņemtas.    Ja vēlaties, lai dublikāta noņemšana darbotos paredzami, vispirms buferējiet tabulu, izmantojot <code>Table.Buffer</code>.


## Examples

### Example #1 
Noņemiet no tabulas rindu dublikātus.
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
Noņemiet no tabulas &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt; rindu dublikātus, kas ir ietverti kolonnā [b].
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
