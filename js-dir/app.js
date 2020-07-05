const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function getTitle(obj, node) {
  let path = document.createElement('div');

  obj.forEach(elem => {
    let pathChild = document.createElement('div');
    let elementWrapper = document.createElement('div');
    let icon = document.createElement('i');
    icon.setAttribute('class', 'material-icons');
    let folderName = document.createElement('div');
    folderName.setAttribute('class', 'folder_name');
    elementWrapper.append(folderName);
    let fileName = document.createElement('div');
    fileName.setAttribute('class', 'file_name');
    fileName.innerHTML = elem.title;
    folderName.prepend(fileName);
    folderName.prepend(icon);
    pathChild.appendChild(elementWrapper);
    path.appendChild(pathChild);

    if (elem.folder) {
      elementWrapper.classList.toggle('folder');
      icon.innerText = 'folder';
      elementWrapper.addEventListener('click', () => {
        icon.innerText === 'folder' ? icon.innerText = 'folder_open' : icon.innerText = 'folder';
        pathChild.querySelector('div.hide').classList.toggle('visible');
      });

      if (elem.children) {
        getTitle(elem.children, pathChild);
      } else {
        let emptyFolder = document.createElement('div');
        emptyFolder.classList.add('empty', 'hide');
        emptyFolder.innerText = 'Folder is empty';
        elementWrapper.append(emptyFolder);
      }
    } else {
      elementWrapper.classList.toggle('file');
      icon.innerText = 'insert_drive_file';
      icon.classList.add('file_image');
    }
  })

  node.appendChild(path);
  if (path.parentNode !== rootNode) {
    path.classList.toggle('hide');
  }
}

getTitle(structure, rootNode);
