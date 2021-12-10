import { serverHtpp, PORT } from "./app";

serverHtpp.listen(PORT, () => console.log(`Running on port ${PORT}`));