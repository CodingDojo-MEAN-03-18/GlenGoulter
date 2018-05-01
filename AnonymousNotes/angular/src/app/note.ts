export class Note{
    constructor(
        public content : String = '',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
