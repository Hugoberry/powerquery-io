---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Devolve a primeira posición do valor (-1 se non se localiza).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

Devolve a posición da ocorrencia especificada do valor de texto <code>substring</code> localizado en <code>text</code>.    O parámetro opcional <code>occurrence</code> pódese usar para especificar que posición da ocorrencia se vai devolver (por defecto, a primeira ocorrencia).    Devolve -1 se non se atopou <code>substring</code>.      <div>        <code>comparer</code> é un <code>Comparer</code> que se usa para controlar a comparación. Os comparadores pódense usar para comparacións que non diferencian maiúsculas de minúsculas ou que recoñecen referencias culturais e a configuración rexional.      </div>      <div>        Os seguintes comparadores incorporados están dispoñibles na linguaxe da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: úsase para realizar unha comparación ordinal exacta</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: úsase para realizar unha comparación de recoñecemento de referencias culturais</li>      </ul>


## Examples

### Example #1 
Obter a posición da primeira ocorrencia de &#34;Mundo&#34; no texto &#34;Ola, Mundo!&#34;. &#34;Ola, Mundo!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Obter a posición da última ocorrencia de &#34;Mundo&#34; en &#34;Ola, Mundo!&#34;. &#34;Ola, Mundo!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
