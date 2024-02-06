---
title: Web.Headers
---

# Web.Headers


Retorna os cabeçalhos HTTP baixados da URL como um valor de registro.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Retorna os cabeçalhos baixados do <code>url</code> como um registro. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar as propriedades adicionais. O registro pode conter os seguintes campos:    <ul><li><code>Query</code> : Adicione programaticamente par&#226;metros de consulta &#224; URL sem precisar se preocupar com a sa&#237;da.</li><li><code>ApiKeyName</code> : Se o site de destino tiver uma no&#231;&#227;o de uma chave de API, este par&#226;metro poder&#225; ser usado para especificar o nome (n&#227;o o valor) do par&#226;metro de chave que precisa ser usado na URL. O valor da chave real &#233; fornecido na credencial.</li><li><code>Headers</code> : A especifica&#231;&#227;o deste valor como um registro fornecer&#225; cabe&#231;alhos adicionais a uma solicita&#231;&#227;o HTTP.</li><li><code>Timeout</code> : A especifica&#231;&#227;o deste valor como uma dura&#231;&#227;o alterar&#225; o tempo limite de uma solicita&#231;&#227;o HTTP. O valor padr&#227;o &#233; 100 segundos.</li><li><code>ExcludedFromCacheKey</code> : A especifica&#231;&#227;o deste valor como uma lista excluir&#225; essas chaves de cabe&#231;alho HTTP de fazer parte do c&#225;lculo para o cache de dados.</li><li><code>IsRetry</code> : A especifica&#231;&#227;o deste valor l&#243;gico como true ignorar&#225; qualquer resposta existente no cache ao buscar dados.</li><li><code>ManualStatusHandling</code> : A especifica&#231;&#227;o deste valor como uma lista impedir&#225; qualquer tratamento interno para solicita&#231;&#245;es HTTP cuja resposta tenha um desses c&#243;digos de status.</li><li><code>RelativePath</code> : A especifica&#231;&#227;o deste valor como texto o anexar&#225; &#224; URL base antes de fazer a solicita&#231;&#227;o.</li></ul>    A solicitação HTTP é feita com o método HEAD. Fora de um contexto de conector de dados personalizado, apenas um subconjunto de cabeçalhos de resposta está disponível (por motivos de segurança).    


## Examples

### Example #1 
Recupere os cabeçalhos HTTP de &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; usando as opções RelativePath e Query.
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
