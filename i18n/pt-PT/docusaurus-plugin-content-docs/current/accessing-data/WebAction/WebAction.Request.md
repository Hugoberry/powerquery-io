---
title: WebAction.Request
---

# WebAction.Request


Cria uma ação que, quando executada, irá devolver os resultados da execução de um pedido HTTP como um valor binário.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Cria uma ação que, quando executada, devolverá os resultados da realização de um pedido de <code>method</code> a <code>url</code> utilizando o HTTP como valor binário.    Pode ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>Query</code> : Adicione programaticamente par&#226;metros de consulta ao URL, sem ter de se preocupar com escapes.</li><li><code>ApiKeyName</code> : Se o site de destino tiver uma no&#231;&#227;o de uma chave de API, este par&#226;metro pode ser utilizado para especificar o nome (n&#227;o o valor) do par&#226;metro chave que &#233; necess&#225;rio utilizar no URL. O valor chave real &#233; fornecido na credencial.</li><li><code>Headers</code> : Especificar este valor como um registo vai fornecer cabe&#231;alhos adicionais a um pedido HTTP.</li><li><code>Timeout</code> : Especificar este valor como uma dura&#231;&#227;o vai alterar o tempo limite para um pedido HTTP. O valor predefinido &#233; de 100 segundos.</li><li><code>ExcludedFromCacheKey</code> : Especificar este valor como uma lista vai excluir estas chaves de cabe&#231;alho HTTP para que n&#227;o fa&#231;am parte do c&#225;lculo para colocar os dados em cache.</li><li><code>IsRetry</code> : Especificar este valor l&#243;gico como verdadeiro vai ignorar qualquer resposta existente na cache ao obter os dados.</li><li><code>ManualStatusHandling</code> : Especificar este valor como uma lista vai impedir qualquer processamento incorporado para pedidos HTTP cuja resposta tenha um destes c&#243;digos de estado.</li><li><code>RelativePath</code> : Especificar este valor como texto acrescenta-o ao URL base antes de fazer o pedido.</li><li><code>Content</code> : Especificar este valor vai fazer com que os conte&#250;dos do mesmo se tornem o corpo do pedido HTTP.</li></ul>    <br />    Note que esta função está desativada na maioria dos contextos. Pondere utilizar antes Web.Contents ou Web.Headers.    


## Examples

### Example #1 
Executar um pedido GET no Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
