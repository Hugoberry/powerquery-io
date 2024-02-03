---
title: Web.Contents
---

# Web.Contents


## Description

Retorna o conteúdo baixado da URL como binário.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Retorna o conteúdo baixado do <code>url</code> como binário. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar as propriedades adicionais. O registro pode conter os seguintes campos:    <ul><li><code>Query</code> : Adicione programaticamente par&#226;metros de consulta &#224; URL sem precisar se preocupar com a sa&#237;da.</li><li><code>ApiKeyName</code> : Se o site de destino tiver uma no&#231;&#227;o de uma chave de API, este par&#226;metro poder&#225; ser usado para especificar o nome (n&#227;o o valor) do par&#226;metro de chave que precisa ser usado na URL. O valor da chave real &#233; fornecido na credencial.</li><li><code>Headers</code> : A especifica&#231;&#227;o deste valor como um registro fornecer&#225; cabe&#231;alhos adicionais a uma solicita&#231;&#227;o HTTP.</li><li><code>Timeout</code> : A especifica&#231;&#227;o deste valor como uma dura&#231;&#227;o alterar&#225; o tempo limite de uma solicita&#231;&#227;o HTTP. O valor padr&#227;o &#233; 100 segundos.</li><li><code>ExcludedFromCacheKey</code> : A especifica&#231;&#227;o deste valor como uma lista excluir&#225; essas chaves de cabe&#231;alho HTTP de fazer parte do c&#225;lculo para o cache de dados.</li><li><code>IsRetry</code> : A especifica&#231;&#227;o deste valor l&#243;gico como true ignorar&#225; qualquer resposta existente no cache ao buscar dados.</li><li><code>ManualStatusHandling</code> : A especifica&#231;&#227;o deste valor como uma lista impedir&#225; qualquer tratamento interno para solicita&#231;&#245;es HTTP cuja resposta tenha um desses c&#243;digos de status.</li><li><code>RelativePath</code> : A especifica&#231;&#227;o deste valor como texto o anexar&#225; &#224; URL base antes de fazer a solicita&#231;&#227;o.</li><li><code>Content</code> : A especifica&#231;&#227;o deste valor alterar&#225; a solicita&#231;&#227;o da Web de um GET para um POST, usando o valor da op&#231;&#227;o como o conte&#250;do do POST.</li></ul>    A solicitação HTTP é feita como GET (quando nenhum Conteúdo é especificado) ou um POST (quando há Conteúdo). As solicitações POST só podem ser feitas anonimamente.    <br />    Os cabeçalhos da resposta HTTP estão disponíveis como metadados no resultado binário. Fora de um contexto de conector de dados personalizado, apenas um subconjunto de cabeçalhos de resposta está disponível (por motivos de segurança).    


## Examples

### Example #1 
Recupere o conteúdo de  of &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; usando as opções RelativePath e Query. Essas opções podem ser usadas para consultar dinamicamente um URL de base estática.
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
Execute um POST em uma URL, passando uma carga útil JSON binária e analisando a resposta como JSON.
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
Conecte-se a uma URL segura que aceite uma chave de autenticação como parte de sua cadeia de caracteres de consulta. Em vez de codificar a chave secreta em M (o que representaria um risco de segurança),     a chave pode ser fornecida com segurança especificando seu nome (não seu valor) em M, escolhendo a autenticação de API Web e inserindo o valor da chave como parte da credencial da API Web.    Quando usado dessa forma, o exemplo a seguir gerará uma solicitação para &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
