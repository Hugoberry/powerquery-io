---
title: Table.Distinct
---

# Table.Distinct


No tabulas tiek noņemti rindu dublikāti.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Noņem rindu dublikātus no tabulas. Neobligāts parametrs `equationCriteria`, kas norāda, kuras tabulas kolonnas tiek pārbaudītas, lai noteiktu dublikātus. Ja `equationCriteria` nav norādīts, tiek pārbaudītas visas kolonnas.  
  
Tā kā Power Query dažkārt pārlādē noteiktas operācijas aizmugursistēmas datu avotiem (pazīstamas kā “locīšana”), un dažkārt arī optimizē vaicājumus, tādu darbību izlaišana, kas nav obligāti nepieciešamas, vispār nav garantijas, kas konkrēti dublikāti tiks saglabāti. Piemēram, nevar pieņemt, ka pirmā rinda ar unikālu kolonnu vērtību kopu paliks, bet rindas tālāk tabulā tiks noņemtas. Ja vēlaties, lai dublikāta noņemšana darbotos paredzami, vispirms buferējiet tabulu, izmantojot `Table.Buffer`.


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
Noņemiet no tabulas `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})` rindu dublikātus, kas ir ietverti kolonnā \[b\].
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
