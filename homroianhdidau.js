javascript:(() => {
  const data = {
    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3B1Ymxpc2hlci5saW5rdmVydGlzZS5jb20vYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE3NTczNDY0NzgsIm5iZiI6MTc1NzM0NjQ3OCwianRpIjoiVWF4eFBVNXp4SlZxU0xEZyIsInN1YiI6Mzc5MjUwMiwicHJ2IjoiN2IzZmVmNDNmOTgxZTE3Nzc5MGQwMGJkZjQ1M2ZhZGM3NzNmNzI4YyJ9.pT_50ukAibj5NXHHKNqqr9K6Ukr6obK7B1_IcZWUsjQ",
    user_token: "X0Ph7bOT4KCByi11PpnZRaNm5rVVha4sOqB7tpDIoUsWXGlm8xziOLZqkxCqjkZQ",
    subId: "3773872816150989170",
    user_current_location: "pa"
  };

  for (const [k, v] of Object.entries(data)) {
    localStorage.setItem(k, v);
  }

  location.reload();
})();
