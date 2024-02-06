---
title: Text.Contains
---

# Text.Contains


Especifica se o texto contém a subcadeia de caracteres.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Detecta se <code>text</code> contém o valor <code>substring</code>. Retorna true se o valor for encontrado. Esta função não aceita curingas ou expressões regulares.      <br />      <br />      O argumento opcional <code>comparer</code> pode ser usado para especificar comparações que não diferenciam maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.      Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:      <ul>        <li><code>Comparer.Ordinal</code>: usado para realizar uma comparação ordinal com distinção entre maiúsculas e minúsculas</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: usado para realizar uma comparação ordinal sem diferenciar maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: usado para realizar uma comparação com reconhecimento de cultura</li>      </ul>


## Examples

### Example #1 
Descubra se o texto &#34;Olá, Mundo&#34; contém &#34;Olá&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Descubra se o texto &#34;Olá, Mundo&#34; contém &#34;olá&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Descubra se o texto “Olá, Mundo” contém “Olá”, usando um comparador que não diferencia maiúsculas de minúsculas.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
