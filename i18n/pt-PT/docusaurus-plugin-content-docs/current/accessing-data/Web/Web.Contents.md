---
title: Web.Contents
---

# Web.Contents


Devolve os conteúdos transferidos a partir do URL como binário.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devolve o conteúdo transferido de <code>url</code> como binário. Pode ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>Query</code> : Adicione programaticamente par&#226;metros de consulta ao URL, sem ter de se preocupar com escapes.</li><li><code>ApiKeyName</code> : Se o site de destino tiver uma no&#231;&#227;o de uma chave de API, este par&#226;metro pode ser utilizado para especificar o nome (n&#227;o o valor) do par&#226;metro chave que &#233; necess&#225;rio utilizar no URL. O valor chave real &#233; fornecido na credencial.</li><li><code>Headers</code> : Especificar este valor como um registo vai fornecer cabe&#231;alhos adicionais a um pedido HTTP.</li><li><code>Timeout</code> : Especificar este valor como uma dura&#231;&#227;o vai alterar o tempo limite para um pedido HTTP. O valor predefinido &#233; de 100 segundos.</li><li><code>ExcludedFromCacheKey</code> : Especificar este valor como uma lista vai excluir estas chaves de cabe&#231;alho HTTP para que n&#227;o fa&#231;am parte do c&#225;lculo para colocar os dados em cache.</li><li><code>IsRetry</code> : Especificar este valor l&#243;gico como verdadeiro vai ignorar qualquer resposta existente na cache ao obter os dados.</li><li><code>ManualStatusHandling</code> : Especificar este valor como uma lista vai impedir qualquer processamento incorporado para pedidos HTTP cuja resposta tenha um destes c&#243;digos de estado.</li><li><code>RelativePath</code> : Especificar este valor como texto acrescenta-o ao URL base antes de fazer o pedido.</li><li><code>Content</code> : Especificar este valor altera o pedido Web de um GET para um POST, utilizando o valor da op&#231;&#227;o como conte&#250;do do POST.</li></ul>    O pedido HTTP é efetuado como GET (quando não for especificado nenhum Conteúdo) ou um POST (quando existir Conteúdo). Os pedidos POST apenas podem ser efetuados anonimamente.    <br />    Os cabeçalhos da resposta HTTP estão disponíveis como metadados no resultado binário. Fora de um contexto de conector com dados personalizados, apenas está disponível um subconjunto de cabeçalhos de resposta (por motivos de segurança).    


## Examples

### Example #1 
Obtenha os conteúdos de &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; utilizando as opções RelativePath e Query. Estas opções podem ser utilizadas para consultar dinamicamente um URL base estático.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2 
Execute um POST num URL, ao passar um payload JSON binário e ao analisar a resposta como JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3 
Ligue-se a um URL seguro que aceite uma chave de autenticação como parte da respetiva cadeia de consulta. Em vez de programar de forma rígida a chave secreta em M (que levantaria um risco de segurança),     a chave pode ser fornecida em segurança ao especificar o nome da mesma (não o valor) em M, escolher a autenticação API Web e introduzir o valor da chave como parte da credencial da API Web.    Quando utilizado desta forma, o exemplo seguinte gerará um pedido para &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
