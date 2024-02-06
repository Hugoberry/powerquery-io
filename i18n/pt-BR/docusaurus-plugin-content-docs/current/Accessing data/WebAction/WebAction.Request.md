---
title: WebAction.Request
---

# WebAction.Request


Cria uma ação que, quando executada, retorna os resultados de realizar uma solicitação HTTP como um valor binário.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Cria uma ação que, quando executada, retornará os resultados da execução de uma solicitação <code>method</code> em relação a<code>url</code> HHTTP como um valor binário. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos: <ul><li><code>Query</code> : Adicione programaticamente par&#226;metros de consulta &#224; URL sem precisar se preocupar com a sa&#237;da.</li><li><code>ApiKeyName</code> : Se o site de destino tiver uma no&#231;&#227;o de uma chave de API, este par&#226;metro poder&#225; ser usado para especificar o nome (n&#227;o o valor) do par&#226;metro de chave que precisa ser usado na URL. O valor da chave real &#233; fornecido na credencial.</li><li><code>Headers</code> : A especifica&#231;&#227;o deste valor como um registro fornecer&#225; cabe&#231;alhos adicionais a uma solicita&#231;&#227;o HTTP.</li><li><code>Timeout</code> : A especifica&#231;&#227;o deste valor como uma dura&#231;&#227;o alterar&#225; o tempo limite de uma solicita&#231;&#227;o HTTP. O valor padr&#227;o &#233; 100 segundos.</li><li><code>ExcludedFromCacheKey</code> : A especifica&#231;&#227;o deste valor como uma lista excluir&#225; essas chaves de cabe&#231;alho HTTP de fazer parte do c&#225;lculo para o cache de dados.</li><li><code>IsRetry</code> : A especifica&#231;&#227;o deste valor l&#243;gico como true ignorar&#225; qualquer resposta existente no cache ao buscar dados.</li><li><code>ManualStatusHandling</code> : A especifica&#231;&#227;o deste valor como uma lista impedir&#225; qualquer tratamento interno para solicita&#231;&#245;es HTTP cuja resposta tenha um desses c&#243;digos de status.</li><li><code>RelativePath</code> : A especifica&#231;&#227;o deste valor como texto o anexar&#225; &#224; URL base antes de fazer a solicita&#231;&#227;o.</li><li><code>Content</code> : A especifica&#231;&#227;o deste valor far&#225; com que o conte&#250;do se torne o corpo da solicita&#231;&#227;o HTTP.</li></ul>    <br />     Observe que essa função está desabilitada na maioria dos contextos. Considere usar Web.Contents ou Web.Headers.    


## Examples

### Example #1 
Executar uma solicitação GET no Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
