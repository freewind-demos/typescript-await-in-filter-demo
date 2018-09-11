import {promises as fs} from 'fs'

async function fileInfo(file: string) {
    const stat = await fs.stat(file)
    return {
        filename: file,
        isFile: stat.isFile(),
        size: stat.size
    }
}

async function demo() {
    const files = await fs.readdir('.')
    const allInfo = await Promise.all(files.map(async file => {
        return await fileInfo(file)
    }))
    const filesInfo = allInfo.filter(info => info.isFile)
    console.log(filesInfo)
}

demo()