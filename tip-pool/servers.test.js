describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table on updateServerTable()', function () {
    updateServerTable();

    expect(serverTbody.innerHTML).toBe("")
    expect(Object.keys(allServers).length).toBe(0);
    expect(allServers).toEqual({});
  })



  afterEach(function () {
    allServers = {};
    serverTbody.innerHTML = "";
    serverNameInput.value = '';
  });

});

