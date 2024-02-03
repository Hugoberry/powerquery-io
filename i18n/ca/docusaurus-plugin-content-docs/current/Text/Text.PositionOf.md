---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Retorna la primera posició del valor (-1 si no es troba).


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

Retorna la posició de la repetició especificada del valor de text <code>substring</code> trobat a <code>text</code>.    Es pot utilitzar un paràmetre opcional <code>occurrence</code> per especificar quina posició de repetició s'ha d'oferir (per defecte, la primera).    Retorna el valor -1 si no s'ha trobat <code>substring</code>.      <div>        <code>comparer</code> és un element <code>Comparer</code> que s'utilitza per controlar la comparació. Es poden utilitzar comparadors per fer comparacions sense distinció de majúscules i minúscules o amb detecció de la cultura i la configuració regional.      </div>      <div>        Els comparadors integrats següents estan disponibles en el llenguatge de fórmules:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: s'utilitza per fer una comparació ordinal exacta.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: s'utilitza per fer una comparació ordinal exacta sense distinció de majúscules i minúscules.</li>        <li> <code>Comparer.FromCulture</code>: s'utilitza per fer una comparació amb detecció de cultura.</li>      </ul>


## Examples

### Example #1 
Obté la posició de la primera aparició de &#34;World&#34; al text &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Obté la posició de l&#39;última aparició de &#34;World&#34; a &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
