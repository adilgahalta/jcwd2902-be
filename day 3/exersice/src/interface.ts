interface IProduct {
  id: number;
  title: string;
  nominal: number;
  type: string;
  category: string;
  date: string;
}

interface IData {
  data: IProduct[];
}

export default IData;
