---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Devolve un valor lóxico baseado na comprobación de igualdade entre os dous valores fornecidos.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Devolve un valor <code>lóxico</code> baseado na comprobación de igualdade sobre os dous valores indicados <code>x</code> e <code>y</code>, utilizando <code>comparer</code>.       <div>          <code>comparer</code> é un <code>Comparador</code> que se usa para controlar a comparación.         Un comparador é unha función que acepta dous argumentos e devolve -1, 0 ou 1 en función de se o primeiro valor é menor, igual ou maior que o segundo.         Os comparadores poden usarse para proporcionar comparacións que non distingan entre maiúsculas e minúsculas ou que sexan conscientes da cultura e da localización.       </div>       <div>         Os seguintes comparadores integrados están dispoñibles no idioma da fórmula:       </div>       <ul>         <li><code>Comparer.Ordinal</code>: úsase para realizar unha comparación ordinal exacta</li>         <li><code>Comparer.OrdinalIgnoreCase</code>: úsase para realizar unha comparación ordinal exacta que non distingue entre maiúsculas e minúsculas</li>         <li> <code>Comparer.FromCulture</code>: Úsase para realizar unha comparación que teña en conta a cultura</li>      </ul>


## Examples

### Example #1 
Compare &#34;1&#34; e &#34;A&#34; utilizando a configuración rexional &#34;gl-ES&#34; para determinar se os valores son iguais.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
