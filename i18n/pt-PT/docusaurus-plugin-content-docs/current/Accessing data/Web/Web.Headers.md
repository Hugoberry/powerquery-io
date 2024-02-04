---
title: Web.Headers
---

# Web.Headers


## Description

Devolve os cabeçalhos HTTP transferidos do URL como um valor de registo.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Devolver os cabeçalhos transferidos de <code>url</code> como um registo. Um parâmetro de registo opcional, <code>options</code>, poderá ser fornecido para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>Query</code> : Adicione programaticamente par&#226;metros de consulta ao URL, sem ter de se preocupar com escapes.</li><li><code>ApiKeyName</code> : Se o site de destino tiver uma no&#231;&#227;o de uma chave de API, este par&#226;metro pode ser utilizado para especificar o nome (n&#227;o o valor) do par&#226;metro chave que &#233; necess&#225;rio utilizar no URL. O valor chave real &#233; fornecido na credencial.</li><li><code>Headers</code> : Especificar este valor como um registo vai fornecer cabe&#231;alhos adicionais a um pedido HTTP.</li><li><code>Timeout</code> : Especificar este valor como uma dura&#231;&#227;o vai alterar o tempo limite para um pedido HTTP. O valor predefinido &#233; de 100 segundos.</li><li><code>ExcludedFromCacheKey</code> : Especificar este valor como uma lista vai excluir estas chaves de cabe&#231;alho HTTP para que n&#227;o fa&#231;am parte do c&#225;lculo para colocar os dados em cache.</li><li><code>IsRetry</code> : Especificar este valor l&#243;gico como verdadeiro vai ignorar qualquer resposta existente na cache ao obter os dados.</li><li><code>ManualStatusHandling</code> : Especificar este valor como uma lista vai impedir qualquer processamento incorporado para pedidos HTTP cuja resposta tenha um destes c&#243;digos de estado.</li><li><code>RelativePath</code> : Especificar este valor como texto acrescenta-o ao URL base antes de fazer o pedido.</li></ul>    O pedido HTTP é composto com o método HEAD. Fora de um contexto de conector com dados personalizados, apenas está disponível um subconjunto de cabeçalhos de resposta (por motivos de segurança).    


## Examples

### Example #1 
Obtenha os cabeçalhos HTTP para &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; através das opções RelativePath e Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
