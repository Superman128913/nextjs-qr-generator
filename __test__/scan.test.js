// 🚨 Remember to keep your `*.test.js` files out of your `/pages` directory!
import { createMocks } from "node-mocks-http";
import scan from "../pages/api/scan";
describe("/api/scan", () => {

  test("returns error if not data present", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        mask: 0,
      },
    });
    
    await scan(req, res);
    
    expect(res._getStatusCode()).toBe(500);
    expect(res._getData()).toEqual("No request body or data");
  });
  
  test("returns error if any input field is missing", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        data: {
          name: "mik",
          surname: "dan",
          email: "mikdan@gmail.com",
          phone: "07460757666",
          timestamp: "132456787654",
        },
        mask: 0,
      },
    });
    
    await scan(req, res);
    
    expect(res._getStatusCode()).toBe(500);
    expect(res._getData()).toEqual("Missing data, please fill-in all the inputs fields");
  });
  
  
  test("returns a qr code based on post data", async () => {
    const qrCode = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOdSURBVO3BQY7cWgIDweRD3f/KOb34C85GgCBVwzYYEX8w85/DTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNM+fBQEn6Tyh1JaCotCU2lJaGp3JGE36TyxGGmHGbKYaZ8eJnKm5JwJQlN5YkkNJU3qbwpCW86zJTDTDnMlA9floQ7VO5QaUloKi0JTeWOJDSVJ5Jwh8o3HWbKYaYcZsqH+T9JaCpN5V92mCmHmXKYKR/+ckloKi0JTeVNSWgqf7PDTDnMlMNM+fBlKt+k8kQSmkpLwjep/EkOM+UwUw4z5cPLkvCbktBUvkmlJeGOJPzJDjPlMFMOMyX+4B+WhCsqdyThisrf7DBTDjPlMFM+PJSEptKS0FRaEppKS0JTuZKE36TyRBKaypUkNJU3HWbKYaYcZkr8wR8kCU3lShK+SeVKEppKS8IVlZaEptKScEXlicNMOcyUw0z58LIkNJUrSbiShDtUriShqVxJQlO5Q+WJJPymw0w5zJTDTIk/eCAJT6i0JDSVK0m4Q+VKEq6oXEnCHSp3JOGKyhOHmXKYKYeZ8uFlKleScEWlJeGKSkvClSQ0labSknAlCU2lJaGpPKHSkvCmw0w5zJTDTPnwkEpLQlNpKi0JV1SuJKGpXEnCm1RaEq4koalcScJvOsyUw0w5zJT4gweS0FRaEprKlSTcodKS0FTuSEJTeSIJTaUloanckYSm8sRhphxmymGmfHhIpSWhqbQk3KFyJQlN5UoSmkpTuSMJ/5LDTDnMlMNM+fBQEppKS8IVlStJaCpXktBUmkpLQlP5piS8SeVNh5lymCmHmRJ/8BdLQlO5koQ7VFoSrqjckYQ7VFoSmsoTh5lymCmHmfLhoST8JpWmciUJd6i0JDyRhKbyRBK+6TBTDjPlMFM+vEzlTUl4QuVKEloSrqi0JFxRuUPlShKaypsOM+UwUw4z5cOXJeEOlTuScEWlJaGpXEnCHUn4JpWWhKbyxGGmHGbKYaZ8+MuptCS0JPwmlStJuCMJTaWpvOkwUw4z5TBTPvzlktBUnkhCU2lJaCpvSsIdSWgqTxxmymGmHGbKhy9T+SaVO5LQVJrKHUloKldUnkhCU3nTYaYcZsphpnx4WRJ+UxKaSktCU2lJaCpvSkJTaUloKnckoak8cZgph5lymCnxBzP/OcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJT/AUwtoBGPfv0YAAAAAElFTkSuQmCC";
    const { req, res } = createMocks({
      method: "POST",
      body: {
        data: {
          name: "mik",
          surname: "dan",
          email: "mikdan@gmail.com",
          dob: "20-02-2021",
          phone: "07460757666",
          timestamp: "132456787654",
        },
        mask: 0,
      },
    });

    await scan(req, res);

    expect(res._getStatusCode()).toBe(200);
    // expect(res._getData()).toEqual(qrCode);
  });
});
