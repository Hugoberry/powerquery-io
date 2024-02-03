---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Zadržava početni pomak, a zatim naizmenično uzima i preskače sledeće redove.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

Zadržava početni pomak, a zatim naizmenično uzima i preskače sledeće redove.    <ul>       <li><code>table</code>: Ulazna tabela.</li>       <li><code>offset</code>: Broj redova koji se zadržavaju pre nego što počnu ponavljanja.</li>       <li><code>skip</code>: Broj redova koji se uklanjaju iz svakog ponavljanja.</li>       <li><code>take</code>: Broj redova koji se zadržavaju u svakom ponavljanju.</li>    </ul>    


## Examples

### Example #1 
Kreiranje tabele od tabele koja, počev od prvog reda, preskače 1 vrednost, a zatim zadržava 1 vrednost.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
