---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Avalua una consulta comparant-la amb una destinació.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

Avalua <code>query</code> comparant-ho amb <code>target</code> mitjançant els paràmetres especificats a <code>parameters</code> i les opcions especificades a <code>options</code>.<br /><code>target</code> defineix la sortida de la consulta.<br /><code>target</code> proporciona el context per a l’operació que <code>query</code> descriu.<br /><code>query</code> descriu la consulta perquè s’executi a <code>target</code>. <code>query</code> s’expressa d’una manera específica de <code>target</code> (per exemple, una instrucció del T-SQL).<br />El valor opcional <code>parameters</code> pot contenir una llista o un registre segons convingui per proporcionar els valors de paràmetres que <code>query</code> espera.<br />El registre opcional <code>options</code> pot contenir opcions que afecten el comportament d’avaluació de <code>query</code> a <code>target</code>. Aquestes opcions són específiques de <code>target</code>.<br />



## Category
Values
