---
title: Web.Contents
---

# Web.Contents


Retorna o conteúdo baixado da URL como binário.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retorna o conteúdo baixado do `url` como binário. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `Query` : Adicione programaticamente parâmetros de consulta à URL sem precisar se preocupar com a saída.
-   `ApiKeyName` : Se o site de destino tiver uma noção de uma chave de API, este parâmetro poderá ser usado para especificar o nome (não o valor) do parâmetro de chave que precisa ser usado na URL. O valor da chave real é fornecido na credencial.
-   `Headers` : A especificação deste valor como um registro fornecerá cabeçalhos adicionais a uma solicitação HTTP.
-   `Timeout` : A especificação deste valor como uma duração alterará o tempo limite de uma solicitação HTTP. O valor padrão é 100 segundos.
-   `ExcludedFromCacheKey` : A especificação deste valor como uma lista excluirá essas chaves de cabeçalho HTTP de fazer parte do cálculo para o cache de dados.
-   `IsRetry` : A especificação deste valor lógico como true ignorará qualquer resposta existente no cache ao buscar dados.
-   `ManualStatusHandling` : A especificação deste valor como uma lista impedirá qualquer tratamento interno para solicitações HTTP cuja resposta tenha um desses códigos de status.
-   `RelativePath` : A especificação deste valor como texto o anexará à URL base antes de fazer a solicitação.
-   `Content` : A especificação deste valor alterará a solicitação da Web de um GET para um POST, usando o valor da opção como o conteúdo do POST.

A solicitação HTTP é feita como GET (quando nenhum Conteúdo é especificado) ou um POST (quando há Conteúdo). As solicitações POST só podem ser feitas anonimamente.  
  
Os cabeçalhos da resposta HTTP estão disponíveis como metadados no resultado binário. Fora de um contexto de conector de dados personalizado, apenas um subconjunto de cabeçalhos de resposta está disponível (por motivos de segurança).


## Examples

### Example #1
Recupere o conteúdo de of `"https://bing.com/search?q=Power+Query"` usando as opções RelativePath e Query. Essas opções podem ser usadas para consultar dinamicamente um URL de base estática.
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
Conecte-se a uma URL segura que aceite uma chave de autenticação como parte de sua cadeia de caracteres de consulta. Em vez de codificar a chave secreta em M (o que representaria um risco de segurança), a chave pode ser fornecida com segurança especificando seu nome (não seu valor) em M, escolhendo a autenticação de API Web e inserindo o valor da chave como parte da credencial da API Web. Quando usado dessa forma, o exemplo a seguir gerará uma solicitação para `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
