---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Retorna uma função de comparador com base na cultura e diferenciação de maiúsculas e minúsculas especificadas.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Retorna uma função de comparador que usa o <code>culture</code> e a diferenciação de maiúsculas e minúsculas especificados pelo <code>ignoreCase</code> para executar comparações.<br />      <br />      Uma função de comparador aceita dois argumentos e retorna -1, 0 ou 1 se o primeiro valor for menor, igual ou maior que o segundo.<br />      <br />      O valor padrão de <code>ignoreCase</code> é false. O <code>culture</code> deve ser uma das localidades com suporte pelo .NET Framework (por exemplo, “en-US”).    


## Examples

### Example #1 
Comparar &#34;a&#34; e &#34;A&#34; usando a localidade &#34;pt-BR&#34; para determinar se os valores são iguais.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Comparar &#34;a&#34; e &#34;A&#34; usando a localidade &#34;pt-BR&#34;, ignorando maiúsculas e minúsculas, para determinar se os valores são iguais.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
