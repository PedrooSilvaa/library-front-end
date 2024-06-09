import baseRequest from './axiosBaseUrl';

export async function getBookById(idLibrary) {
    try {
        const response = await baseRequest.get(`/library/${idLibrary}`);

        // Aqui, você deve acessar os dados na propriedade "data" da resposta
        const responseData = response.data;

        // Crie um objeto com os dados que você deseja extrair da resposta
        const dataObject = {
            title: responseData.title,
            author: responseData.author,
            description: responseData.description
        };

        console.log("response " + dataObject.title);
        return dataObject;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}

export async function getBookByTitle(titleLibrary) {
    try {
        const response = await baseRequest.get(`/library/title/${titleLibrary}`);

        // Aqui, você deve acessar os dados na propriedade "data" da resposta
        const responseData = response.data;

        // Crie um objeto com os dados que você deseja extrair da resposta
        const dataObject = {
            title: responseData.title,
            author: responseData.author,
            description: responseData.description
        };

        console.log("response " + dataObject.title);
        return dataObject;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}

export async function ListBooks() {
    try {
        const response = await baseRequest.get(`/library`);

        // Aqui, você deve acessar os dados na propriedade "data" da resposta
        const responseData = response.data;

        const books = responseData.map(book => ({
            title: book.title,
            author: book.author,
            description: book.description
        }));

        console.log('response books', books);
        return books;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}


export async function PostNewBook(bookData) {
    try {
        
        const response = await baseRequest.post(`/library`, bookData);
        return response.data;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}

