const request = new XMLHttpRequest();
/**
 * 1. Request 인터페이스 생성
 * 2. request 메소드(함수) 생성
 * 3. 상속받아서 GETRequest생성
 */

// 나중에 숙제 SOLID 원칙 에 맞도록 코드 수정하기
// REST에 대해 공부하기

const GETRequest = (url) => {
    request.open("GET", url);
    request.send();
    return request.response;
}

const POSTRequest = (url, data) => {
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(data);
}

const PUTRequest = (url, data) => {
    request.open("PUT", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(data);
}

const DELETERequest = (url, data) => {
    request.open("DELETE", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(data);
}

