const loggerDeleteConfig = { serverId: 1797, active: true };

const loggerDeleteHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1797() {
    return loggerDeleteConfig.active ? "OK" : "ERR";
}

console.log("Module loggerDelete loaded successfully.");