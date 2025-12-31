// 项目详情数据
const projectDetails = {
    1: {
        title: '项目一',
        description: '这是一个重要的技术项目，展示了我在系统设计和开发方面的能力。项目涉及多个技术栈，包括前端、后端和数据库设计。',
        tags: ['Web开发', '数据库', 'API设计'],
        details: '这是一个全栈Web应用项目，采用了现代化的技术栈。前端使用响应式设计，确保在各种设备上都有良好的用户体验。后端采用RESTful API架构，实现了高效的数据交互。数据库设计考虑了数据一致性和查询性能，使用了索引优化和查询缓存等技术。项目成功部署并稳定运行，处理了大量并发请求。',
        technologies: [
            { name: 'HTML5/CSS3', icon: 'fab fa-html5' },
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'Node.js', icon: 'fab fa-node-js' },
            { name: 'MySQL', icon: 'fas fa-database' },
            { name: 'Redis', icon: 'fas fa-server' }
        ],
        features: [
            { title: '响应式设计', description: '支持各种设备，提供一致的用户体验' },
            { title: 'RESTful API', description: '标准化的API设计，易于集成和扩展' },
            { title: '性能优化', description: '数据库索引和缓存机制，提升响应速度' },
            { title: '高并发支持', description: '支持大量用户同时访问，系统稳定可靠' }
        ]
    },
    2: {
        title: '项目二',
        description: '移动应用开发项目，专注于用户体验和性能优化。项目成功上线并获得了用户的好评。',
        tags: ['移动开发', 'UI/UX', '性能优化'],
        details: '这是一个跨平台移动应用项目，专注于提供流畅的用户体验。在UI/UX设计方面，我们进行了大量的用户调研和A/B测试，确保界面直观易用。性能优化方面，我们实现了代码分割、懒加载、图片压缩等技术，将应用启动时间减少了40%，内存占用降低了30%。应用上线后获得了4.8分的用户评分。',
        technologies: [
            { name: 'React Native', icon: 'fab fa-react' },
            { name: 'Redux', icon: 'fas fa-code' },
            { name: 'Firebase', icon: 'fas fa-fire' },
            { name: 'Figma', icon: 'fab fa-figma' }
        ],
        features: [
            { title: '跨平台支持', description: '一套代码同时支持iOS和Android平台' },
            { title: '用户体验优化', description: '通过用户调研和A/B测试优化界面设计' },
            { title: '性能提升', description: '启动时间减少40%，内存占用降低30%' },
            { title: '用户好评', description: '应用商店评分4.8分，获得大量正面反馈' }
        ]
    },
    3: {
        title: '项目三',
        description: '人工智能和机器学习项目，使用先进的算法解决实际问题。项目在准确性和效率方面都达到了预期目标。',
        tags: ['机器学习', 'Python', '数据分析'],
        details: '这是一个基于机器学习的智能分析系统。我们使用了多种算法模型，包括深度学习神经网络和传统机器学习算法。通过大量的数据训练和调优，模型的准确率达到了95%以上。项目还实现了实时数据处理和预测功能，能够快速响应业务需求。系统已经在生产环境中稳定运行，为业务决策提供了有力支持。',
        technologies: [
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'TensorFlow', icon: 'fas fa-brain' },
            { name: 'Scikit-learn', icon: 'fas fa-chart-line' },
            { name: 'Pandas', icon: 'fas fa-table' },
            { name: 'NumPy', icon: 'fas fa-calculator' }
        ],
        features: [
            { title: '高准确率', description: '模型准确率达到95%以上，满足业务需求' },
            { title: '实时处理', description: '支持实时数据处理和预测功能' },
            { title: '多种算法', description: '结合深度学习和传统机器学习算法' },
            { title: '生产环境', description: '系统稳定运行，为业务决策提供支持' }
        ]
    },
    4: {
        title: '项目四',
        description: '云平台和微服务架构项目，实现了高可用性和可扩展性。项目支持大规模并发访问，稳定运行。',
        tags: ['云服务', '微服务', 'DevOps'],
        details: '这是一个基于微服务架构的云平台项目。系统采用了容器化部署，使用Docker和Kubernetes进行编排管理。微服务架构使得系统具有良好的可扩展性，可以根据负载动态调整资源。我们实现了服务发现、负载均衡、熔断降级等机制，确保系统的高可用性。通过CI/CD流水线，实现了自动化测试和部署，大大提高了开发效率。系统支持每秒处理数万次请求，可用性达到99.9%。',
        technologies: [
            { name: 'Docker', icon: 'fab fa-docker' },
            { name: 'Kubernetes', icon: 'fas fa-cubes' },
            { name: 'Spring Cloud', icon: 'fas fa-cloud' },
            { name: 'AWS', icon: 'fab fa-aws' },
            { name: 'Jenkins', icon: 'fas fa-cog' }
        ],
        features: [
            { title: '微服务架构', description: '模块化设计，易于扩展和维护' },
            { title: '容器化部署', description: '使用Docker和K8s实现自动化部署' },
            { title: '高可用性', description: '服务发现、负载均衡、熔断降级机制' },
            { title: 'CI/CD流水线', description: '自动化测试和部署，提高开发效率' },
            { title: '高性能', description: '支持每秒数万次请求，可用性99.9%' }
        ]
    }
};

// 获取URL参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 显示项目详情
function displayProjectDetail() {
    const projectId = getUrlParameter('project');
    const project = projectDetails[projectId];
    
    if (!project) {
        document.getElementById('projectDetail').innerHTML = `
            <div style="text-align: center; padding: 5rem 0;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h2>项目未找到</h2>
                <p>请返回<a href="index.html#projects">项目列表</a></p>
            </div>
        `;
        return;
    }
    
    // 生成技术栈HTML
    const technologiesHTML = project.technologies.map(tech => `
        <div class="tech-card">
            <i class="${tech.icon}"></i>
            <h3>${tech.name}</h3>
        </div>
    `).join('');
    
    // 生成功能特性HTML
    const featuresHTML = project.features.map(feature => `
        <div class="feature-item">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
    
    // 生成标签HTML
    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // 生成完整内容
    const contentHTML = `
        <a href="index.html#projects" class="back-button">
            <i class="fas fa-arrow-left"></i> 返回项目列表
        </a>
        <div class="project-header">
            <h1>${project.title}</h1>
            <div class="project-meta">
                ${tagsHTML}
            </div>
            <p class="project-description">${project.description}</p>
        </div>
        
        <div class="project-section">
            <h2>项目概述</h2>
            <p>${project.details}</p>
        </div>
        
        <div class="project-section">
            <h2>技术栈</h2>
            <div class="tech-grid">
                ${technologiesHTML}
            </div>
        </div>
        
        <div class="project-section">
            <h2>核心功能</h2>
            <div class="project-features">
                ${featuresHTML}
            </div>
        </div>
    `;
    
    document.getElementById('projectDetail').innerHTML = contentHTML;
    
    // 更新页面标题
    document.title = `${project.title} - 我的个人主页`;
}

// 页面加载时显示项目详情
document.addEventListener('DOMContentLoaded', displayProjectDetail);

