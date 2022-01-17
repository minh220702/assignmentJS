import data from "../data";
const News = {
    render() {
        return `
         <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ảnh
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tiêu đề
                    </th>
                    
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Sửa</span>
                    </th>
                  </tr>
                </thead>
                ${data.map((post) => `
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                        </div>
                       
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">${post.desc}</div>
                      
                    </td>
                   
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
      
                  <!-- More people... -->
                </tbody>
                `).join("")}
              </table>
            </div>
          </div>
        </div>
      </div>
            
            



        `;
    },
};
export default News;